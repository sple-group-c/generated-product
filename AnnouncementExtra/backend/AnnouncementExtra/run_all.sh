#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE schedulingmanagementsystem_product_fullproduct' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'schedulingmanagementsystem_product_fullproduct') \gexec" | psql "postgresql://postgres:a@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:a@localhost/schedulingmanagementsystem_product_fullproduct"
done

java -cp schedulingmanagementsystem.product.fullproduct --module-path schedulingmanagementsystem.product.fullproduct -m schedulingmanagementsystem.product.fullproduct &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait