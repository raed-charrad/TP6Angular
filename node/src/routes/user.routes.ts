import { create, deleteUser, findAll, findOne, updateUser } from '../controllers/user.controller';
module.exports = (app: any) => {
  app.get("/customers", findAll);
  app.get("/customers/:id", findOne);
  app.post("/customers", create);
  app.delete("/customers/:id", deleteUser);
  app.put("/customers", updateUser);
}
