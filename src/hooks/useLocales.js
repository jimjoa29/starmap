import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

export const useLocales = () => {
  const [locales, setLocales] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLocales = async () => {
    try {
      setLoading(true);
      // Consultamos la tabla que creamos en Supabase
      const { data, error } = await supabase
        .from('locales')
        .select('*');

      if (error) throw error;
      setLocales(data);
    } catch (error) {
      console.error('Error cargando locales, Joan:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocales();
  }, []);

  return { locales, loading };
};