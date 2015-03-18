<?php

class Database
{
    public static $PDO = null;

    public static function connect()
	{
		try
        {
			self::$PDO = new PDO('mysql:host=mysql-chip8.alwaysdata.net;dbname=chip8_bd', 'chip8','chip8');
			self::$PDO->exec('SET NAMES utf8');
		}
        catch (PDOException $e)
        {
			trigger_error('Unable to connect to database : ' . $e->getMessage(), E_USER_ERROR);
		}
	}

    public static function disconnect()
    {
        self::$PDO = null;
    }
}
		