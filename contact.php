<?php

if (isset($_POST['name'], $_POST['email'], $_POST['message'])) 
{
    echo json_encode($_POST);
}