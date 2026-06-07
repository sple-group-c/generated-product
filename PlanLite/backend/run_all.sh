#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE schedulingmanagementsystem_product_planlite' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'schedulingmanagementsystem_product_planlite') \gexec" | psql "postgresql://postgres:1234@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:1234@localhost/schedulingmanagementsystem_product_planlite"
done

java -cp schedulingmanagementsystem.product.planlite --module-path schedulingmanagementsystem.product.planlite -m schedulingmanagementsystem.product.planlite &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait