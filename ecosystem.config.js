module.exports = {
    apps: [
        {
            name: "monitoring-beko",
            cwd: "/var/www/html/synergix-beko/monitoring",
            script: "npx",
            log_date_format: "YYYY-MM-DD HH:mm:ss Z",
            interpreter: "none",
            args: "serve -l 8008 -s build"
        },
    ],
};