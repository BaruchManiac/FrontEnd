<script>
export default {
  data() {
    return {
      nome: "",
      idade: "",
      cabelo: false,
      pessoas: [],
    };
  },
  methods: {
    cadastrarPessoas() {
      this.pessoas.push({
        nome: this.nome,
        idade: this.idade,
        cabelo: this.cabelo,
      });

      this.nome = "";
      this.idade = "";
      this.cabelo = false;
    },
  },
};
</script>


<template>
    <div class="d-flex justify-content-between" id="topid">
    <div>
      <h1>PESSOAS</h1>
    </div>
    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Adicionar
      </button>
    </div>
  </div>

  <br><br><br>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastro</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="nomeid">Nome</label>
            <input type="text" class="form-control" v-model="nome" id="nomeid" />
          </div>
          <div class="mb-3">
            <label for="idadeid">Idade</label>
            <input type="number" class="form-control" v-model="idade" id="idadeid" />
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="cabelo" id="cabeloid" />
            <label class="form-check-label" for="cabeloid">
              Você tem cabelo?
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="cadastrarPessoas">Salvar</button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="pessoas.length === 0" class="text-center mt-4">
    <h3>SEM DONO, QUER ADOTAR?</h3>
    <img src="./assets/undraw_page-eaten_b2rt.svg" alt="Sem registros" width="30%"/>
  </div>

  <div v-else>
    <table class="table mt-4">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Idade</th>
          <th scope="col">Cabelo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pessoa, index) in pessoas" :key="index">
          <td>{{ pessoa.nome }}</td>
          <td>{{ pessoa.idade }}</td>
          <td>{{ pessoa.cabelo ? 'Sim' : 'Não' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style>
#topid{
  margin: 20px;
}
table{
  margin: 20px;
}
</style>
