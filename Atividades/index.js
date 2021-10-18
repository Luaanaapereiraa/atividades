var app = new function() {
    this.el = document.getElementById('tasks');
  
    this.tasks = [];
  
  
  
    this.FetchAll = function() {
      var data = '';
  
      if (this.tasks.length > 0) {
        for (i = 0; i < this.tasks.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Editar</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Deletar</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.tasks.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-todo');
      // Adiciona
      var task = el.value;
  
      if (task) {
        // Add novo
        this.tasks.push(task.trim());
        // Reseta input
        el.value = '';
        // nova lista
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-todo');
      // Mostra
      el.value = this.tasks[item];
      
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        
        var task = el.value;
  
        if (task) {
          
          self.tasks.splice(item, 1, task.trim());
          // nova lista
          self.FetchAll();
          // esconde
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // apaga linha
      this.tasks.splice(item, 1);
      // mostra lista nova
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Atividades';
  
      if (data) {
          if(data ==1){
              name = 'Atividade'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = ' Sem ' + name;
      }
    };
  
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  } 