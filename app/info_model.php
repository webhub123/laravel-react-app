<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;


class info_model extends Model {
    

    public function get_info($limit,$offset,$search) {

        if(strlen($search) > 0) {

            return DB::table('info')
                    ->select('info.*',
                        DB::raw(" (SELECT COUNT(*) FROM info WHERE fullname LIKE '%".$search."%' ) as total_page ")
                    )
                    ->where('fullname','LIKE','%'.$search.'%')
                    ->limit($limit)
                    ->offset($offset)
                    ->get();
        }else {
            return DB::table('info')
                        ->select('info.*',
                                    DB::raw(" (SELECT COUNT(*) FROM info ) as total_page ")
                                )
                        ->limit($limit)
                        ->offset($offset)
                        ->get();

        }


    }


    public function get_list($id) {


        return DB::table('info')
                 ->where('id',$id)
                 ->get();
    }

    public function get_ac_list($term) {

        return DB::table('info')
                ->select('fullname as name')
                ->where('fullname','LIKE','%'.$term.'%')
                ->get();

    }


    public function update_info($update_list,$id) {


        try{

            DB::table('info')->where('id',$id)->update($update_list);

            return array('status' => true);

        }catch(\Exception $e){
            return array('status' => false, 'message' => $e);
        }

    }

    public function save_info($fullname,$age,$address,$gender) {

        $data = array(
            'fullname' => $fullname,
            'age' => $age,
            'address' => $address,
            'gender' => $gender,
            'created_at' => date('Y-m-d h:i:s')
        );


        try{

            DB::table('info')->insert($data);
            return array('status' => true);

        }catch(\Exception $e){
            return array('status' => false, 'message' => $e);
        }

    }


    public function delete_info($id) {

        try{


            DB::table('info')->where('id',$id)->delete();
            
            return array('status' => true);

        }catch(\Exception $e){
            return array('status' => false, 'message' => $e);
        }

    }

}
