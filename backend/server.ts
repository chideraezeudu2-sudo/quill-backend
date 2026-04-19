import express, { Express, Request, Response, NextFunction, Router } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();

// SERVER CONFIG
PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const supabaseUrl = process.env.SUPABASE_URL || 'https://rqeuwyfrvehdmvlhbwtb.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZXV3eWZydmVoZG12bGhid3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNjUwMDAsImV4cCI6MTg5NzAzMTAwMH0.W6yfSLbE8L16WZUMQr7V_-6YWLSUDKm1HaNAzn2QFQE';#Š	