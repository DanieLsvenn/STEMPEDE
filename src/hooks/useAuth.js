import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/MergedProvider';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;