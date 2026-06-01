import os
from http.server import HTTPServer, BaseHTTPRequestHandler
import psycopg2

DB_URL = os.environ.get("DB_URL", "postgresql://postgres:postgres123@postgres/schedulingmanagementsystem_product_fullproduct")

TABLES = [
    "taskmanagement_coba",
    "taskmanagement_impl",
    "beritaboard_subscription",
    "beritaboard_impl",
]

def do_reset():
    conn = psycopg2.connect(DB_URL)
    conn.autocommit = False
    cur = conn.cursor()
    for table in TABLES:
        cur.execute(f"TRUNCATE {table} CASCADE")
    conn.commit()
    cur.close()
    conn.close()

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/reset":
            try:
                do_reset()
                body = b"<h2>Reset done!</h2><p>Tables truncated successfully.</p>"
                self.send_response(200)
            except Exception as e:
                body = f"<h2>Error</h2><pre>{e}</pre>".encode()
                self.send_response(500)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        print(f"{self.address_string()} - {format % args}")

HTTPServer(("0.0.0.0", 8080), Handler).serve_forever()
