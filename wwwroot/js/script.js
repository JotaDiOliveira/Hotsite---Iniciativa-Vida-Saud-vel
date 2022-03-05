function Cadastrar()
{
   let paramentros =
   {
       Nome: $("#nome").val(),
       Email: $("#email").val(),
       Mensagem: $("#mensagem").val()
   }

   $.post('/Home/Cadastrar', paramentros)
   .done(
     function(data){
         if(data.status=="OK"){
             $("#blocoFormulario").after("<h4>cadastro com sucesso</h4>");
             $("#blocoFormulario").hide();
             
         }
         else{
            $("#blocoFormulario").after("<h4>"+data.mensagem+"</h4>");
         }
     }
   )

   .fail(
       function(){
           alert("Erro de Conexão!!!")
       }
   );

}


$(document).ready(
    function()
    {
        $("#formulario").submit(
            function(e)
            {
                e.preventDefault();
                Cadastrar();
            }
        )
    }
);
