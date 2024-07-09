<?php
require 'db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$method = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];

function getParams($requestUri) {
    $path = explode('/', $requestUri);
    $params = [];
    
    if (isset($path[3])) {
        $params['id'] = $path[3];
    }
    return $params;
}

switch ($method) {
    case 'GET':
        $stmt = $pdo->query('SELECT * FROM todos');
        $todos = $stmt->fetchAll();
        echo json_encode($todos);
        break;
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        if (!isset($input['title'])) {
            echo json_encode(['error' => 'Missing title']);
            exit;
        }
        $sql = "INSERT INTO todos (title) VALUES (?)";
        $stmt= $pdo->prepare($sql);
        $stmt->execute([$input['title']]);
        echo json_encode(['id' => $pdo->lastInsertId(), 'title' => $input['title']]);
        break;
    case 'DELETE':
        $parts = getParams($requestUri);
        if (!isset($parts['id'])) {
            echo json_encode(['error' => 'Missing id']);
            exit;
        }
        $id = $parts['id'];
        $sql = "DELETE FROM todos WHERE id=?";
        $stmt= $pdo->prepare($sql);
        $stmt->execute([$id]);
        echo json_encode(['id' => $id]);
        break;
}
?>
