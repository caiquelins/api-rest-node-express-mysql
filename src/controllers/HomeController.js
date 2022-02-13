import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Caique',
      sobrenome: 'Lins',
      email: 'caique.lins@gmail.com',
      idade: 23,
      peso: 80,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
