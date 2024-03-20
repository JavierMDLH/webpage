const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    // Rutas para las páginas web
    const publicDirectoryPath = path.join(__dirname, 'public');
    const indexPath = path.join(publicDirectoryPath, 'index.html');
    const securedPath = path.join(publicDirectoryPath, 'secured.html');

    // Servir la página correspondiente
    if (pathname === '/') {
        fs.readFile(indexPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (pathname === '/secured') {
        // Aquí puedes agregar la lógica de autenticación
        // Por ahora, simplemente serviremos la página
        fs.readFile(securedPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
