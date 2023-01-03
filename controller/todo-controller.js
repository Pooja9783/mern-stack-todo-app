import Todo from "../model/model.js";

export const addtodo = async (req, res) => {
  // console.log(req.body);
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      createAt: Date.now(),
    });
    await newTodo.save();

    res.status(200).json(newTodo);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const newTodo = await Todo.find({});
    return res.status(200).json(newTodo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    const Toggletodo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todo.done }
    );
    await Toggletodo.save();
    return res.status(200).json(Toggletodo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { data: req.body.data }
    );

    const updateTodo = await Todo.findById(req.params.id);
    // await Toggletodo.save();
    return res.status(200).json(updateTodo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);

    // await Toggletodo.save();
    return res.status(200).json(deleteTodo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
