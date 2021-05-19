import * as mongoose from 'mongoose';
import {User} from './interface';

mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

User.findOneAndDelete({email: 'pedro@gmail.es'}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
