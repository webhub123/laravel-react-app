<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{url?}/{params?}', function () {
    return view('welcome');
});


Route::group(['prefix' => 'api'], function() {

    Route::get('/list/{id}', 'info_controller@get_list');
    Route::get('/get_ac_list/{term}', 'info_controller@get_ac_list');

    Route::delete('/delete/{id}', 'info_controller@delete_info');


    Route::post('/log_checker', 'user_controller@log_checker');
    Route::post('/logout', 'user_controller@logout');

    Route::post('/query', 'info_controller@index');
    Route::post('/register/save', 'info_controller@save');

    Route::post('/list/save', 'info_controller@save_info');

    Route::post('/update', 'info_controller@update_info');
});