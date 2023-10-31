import React from 'react';
import { useState, useEffect } from "react";

const CardProduct = ({ title, price, description, category, image }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setImageLoaded(true);
        };
        img.onerror = () => {
            console.error(`Error al cargar la imagen: ${image}`);
            setImageLoaded(true);
            // Marcar como cargada incluso en caso de error para evitar intentos de carga infinitos.
        };

        // Limpiar el efecto cuando el componente se desmonta para evitar posibles fugas de memoria.
        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [image]);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            {imageLoaded ? (
                <img src={image} alt={title} className="w-full h-48 object-cover"  />
            ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gray-300">
                    Cargando...
                </div>
            )}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base mb-2">${price}</p>
                <p className="text-gray-600 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {category}
                </span>
            </div>
        </div>
    );
};

export default CardProduct;
