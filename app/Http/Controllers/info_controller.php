<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\info_model;
use App\user_model;


class info_controller extends Controller {
    
    private $info_model;
    private $user_model;

    public function __construct() {

        $this->info_model = new info_model();
        $this->user_model = new user_model();

    }
    
    public function index(Request $req) {

        $limit = $req->input('limit');
        $offset = $req->input('offset');
        $search = $req->input('search');

        $list = $this->info_model->get_info($limit,$offset,$search);

        return response()->json($list);
    }

    public function get_list($id) {


        $result = $this->info_model->get_list($id);

        return response()->json($result);

    }

    public function get_ac_list($term) {


        $result = $this->info_model->get_ac_list($term);

        return response()->json($result);
    }

    public function update_info(Request $req) {

        $update_list = $req->input('update_list');
        $id = $req->input('id');

        $result = $this->info_model->update_info($update_list,$id);

        return response()->json($result);
    }

    public function save(Request $req) {

        $username = $req->input('username');
        $password = $req->input('password');

        $result = $this->user_model->save_user($username,$password);

        return response()->json($result);

    }


    public function save_info(Request $req) {

        $fullname = $req->input('name');
        $age = $req->input('age');
        $address = $req->input('address');
        $gender = $req->input('gender');

        $result = $this->info_model->save_info($fullname,$age,$address,$gender);


        return response()->json($result);
    }


    public function delete_info($id) {

        $result = $this->info_model->delete_info($id);

        return response()->json($result);
    }

}
