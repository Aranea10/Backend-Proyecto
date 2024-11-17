let items = [];

const getItems = (req, res) => {
  res.status(200).json({ data: items });
};
const getItemById = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ error: 'Item no encontrado' });
    res.status(200).json({ data: item });
  };
  const createItem = (req, res) => {
    const { nombre, descripcion, precio, categoria, estado } = req.body;
  
    if (!nombre || !descripcion || !precio || !categoria || !estado) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
  
    const newItem = {
      id: items.length + 1,
      nombre,
      descripcion,
      precio,
      categoria,
      estado
    };
  
    items.push(newItem);
    res.status(201).json({ data: newItem });
  };
  const updateItem = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ error: 'Item no encontrado' });
  
    const { nombre, descripcion, precio, categoria, estado } = req.body;
    if (!nombre || !descripcion || !precio || !categoria || !estado) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
  
    item.nombre = nombre;
    item.descripcion = descripcion;
    item.precio = precio;
    item.categoria = categoria;
    item.estado = estado;
  
    res.status(200).json({ data: item });
  };
  const deleteItem = (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).json({ error: 'Item no encontrado' });
  
    items.splice(itemIndex, 1);
    res.status(200).json({ message: 'Item eliminado correctamente' });
  };

  module.exports = {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
  };