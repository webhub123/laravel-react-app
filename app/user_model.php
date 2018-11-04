<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

use DB;


class user_model extends Model {
    

    public function log_checker($username,$password) {


        $sql = DB::table('users')
                 ->where('name','=',$username)
                 ->limit(1)
                 ->get();

        if($sql->count() > 0) {

            foreach($sql as $row) {

                if(Hash::check($password, $row->password)) {
                    
                    $data = array(
                        'id' => $row->id,
                    );

                    session($data);

                    return array('status' => true, 'id' => $row->id );
                }else {
                    return array('status' => false);
                }
            }

        }else {
            return array('status' => false);
        }

    }

    public function save_user($username,$password) {

        $user = array(
            'name' => $username,
            'email' => '',
            'password' => Hash::make($password),
            'remember_token' => '',
            'created_at' => date('Y-m-d h:i:s')
        );


        try {
            
            //DB::beginTransaction();

            DB::table('users')->insert($user);

            return array('status' => true);

        }catch(\Exception $e) {
            //DB::rollback();
            return array('status' => false, 'message' => $e);
        }

    }


}
