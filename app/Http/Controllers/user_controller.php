<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\user_model;
use Session;
 
class user_controller extends Controller {
    
    private $user_model;

    public function __construct() {

        $this->user_model = new user_model();

    }


    public function logout(Request $req) {

        Session::flush();

        return;
    }

    public function log_checker(Request $req) {

        $username = $req->input('username');
        $password = $req->input('password');

        $result = $this->user_model->log_checker($username,$password);


        return response()->json($result);

    }

}
