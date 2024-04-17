import express from 'express';
import { adding ,reading,updating,deleting} from './curd'; // Note: No need to specify the file extension
import path from "path";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"..","static")))

app.set('views', path.join(__dirname, '..', 'views'));

app.set('view engine', 'hbs');

app.get('/todo', async(req , res) => {
  let data=await reading();
  await res.render("todo",{
    todo:data
})
});

app.post('/todo', async (req, res) => {
    const task = req.body.task;
    
    await adding(task); 
    let data=await reading();
    await res.render("todo",{
      todo:data
  })
    
});

app.post('/update/:id', async (req, res) => {
  const id= req.params.id;
  const idd:number=+id;
  const newTask = req.body.tasktoup;
  await updating(idd, newTask);
  res.redirect('/todo'); 
});

app.post('/delete/:id', async (req, res) => {
  const id = req.params.id;
  const idd:number=+id;
  await deleting(idd);
  
  res.redirect('/todo');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});












  
  
  


