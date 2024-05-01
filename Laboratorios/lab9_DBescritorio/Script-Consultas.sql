select Clave, Descripción , Precio
from Materiales
where Descripción like '%Tub%';

select Clave, Descripción, Precio
from Materiales
where Precio > 300;

SELECT e.Clave, p.RazonSocial
FROM entregan e
JOIN proveedores p ON e.RFC = p.RFC
JOIN materiales m ON e.Clave = m.Clave
WHERE m.Descripción LIKE '%Ladrillos%';

SELECT m.Descripción AS 'Material',
       p.RazonSocial AS 'Proveedor',
       pr.Denominación AS 'Proyecto',
       e.Fecha,
       e.Cantidad
FROM entregan e
JOIN proveedores p ON e.RFC = p.RFC
JOIN materiales m ON e.Clave = m.Clave
JOIN proyectos pr ON e.Número = pr.Número
WHERE m.Descripción LIKE '%Pintura%'
AND YEAR(e.Fecha) = 1998;

