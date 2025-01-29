import './style.css';
import tshirts from "../api/tshirts.json";
import hoodies from "../api/hoodies.json";
import { showTshirts } from './homeShowProducts';
import { showHoodies } from './homeShowProducts';

// calling the function 'showProducts' for dynamic card thing.
showTshirts(tshirts); 
showHoodies(hoodies); 

