//--------------------------------------SELEÇÃO------------------------------------------
const senhaChamada=document.querySelector('.senha-chamada')
const caixaChamada=document.querySelector('.caixa-chamada')

const botaoPreferencial=document.querySelector('.botao-cliente-p')
const botaoComum=document.querySelector('.botao-cliente-c')
const botaoRapido=document.querySelector('.botao-cliente-r')


const senhaCliente=document.querySelector('.senha-cliente')

const botaoCaixa1=document.querySelector('.botao-caixa-1')
const botaoCaixa2=document.querySelector('.botao-caixa-2')
const botaoCaixa3=document.querySelector('.botao-caixa-3')
const botaoCaixa4=document.querySelector('.botao-caixa-4')

//-----------------------------------ARRAYS DAS FILAS----------------------------------

const filaPreferencial=[];
const filaRapida=[];
const filaComum=[];
let fila=0;

//--------------------------------ADICIONAR NOVAS SENHAS ------------------------------

function adicionarFila(event){
    
    if(event.target.innerText==="Prioritário"){
        fila++
        filaPreferencial.push("P-"+fila);
        senhaCliente.innerText=("P-"+fila);
    }
    if(event.target.innerText==="Rápido"){
        fila++
        filaRapida.push("R-"+fila);
        senhaCliente.innerText=("R-"+fila);
    }
    if(event.target.innerText==="Comum"){
        fila++
        filaComum.push("C-"+fila)
        senhaCliente.innerText=("C-"+fila);
    }
    console.log(filaComum)
    console.log(filaRapida)
    console.log(filaPreferencial)
    
}

//-----------------------------------------FUNCAO PARA CHAMAR OS PRIMEIROS DA FILA--------------------------------
function sairFila(event){
//-------------------------------FILA PREFERENCIAL------------------------------
if(filaComum.length>0 || filaPreferencial.length>0 || filaRapida.length>0)
{
    if(event.target.innerText=="caixa 1")
        {
            caixaChamada.innerText="Caixa: 1";
            if(filaPreferencial.length>0)
            {
                const clienteChamado=filaPreferencial.shift();
                senhaChamada.innerText=clienteChamado;
                
            }
            else
            {
                if(filaRapida.length>0)
                {
                    clienteChamado=filaRapida.shift();
                    senhaChamada.innerText=clienteChamado;
                }
                else
                {
                    clienteChamado=filaComum.shift();
                    senhaChamada.innerText=clienteChamado;
                }
            }
        }
 
//----------------------------------FILA RÁPIDA---------------------------------


    if(event.target.innerText=="caixa 2")
    {
        caixaChamada.innerText="Caixa: 2";
        if(filaRapida.length>0)
        {
            const clienteChamado=filaRapida.shift();
            senhaChamada.innerText=clienteChamado;
        }else
        {
            if(filaPreferencial.length>0)
            {
                clienteChamado=filaPreferencial.shift();
                senhaChamada.innerText=clienteChamado;
            }else
            {
                clienteChamado=filaComum.shift();
                senhaChamada.innerText=clienteChamado;
            }
        }
    } 

    if(event.target.innerText=="caixa 3")
    {
        caixaChamada.innerText="Caixa: 3";
        if(filaRapida.length>0)
        {
            const clienteChamado=filaRapida.shift();
            senhaChamada.innerText=clienteChamado;
        }else
        {
            if(filaPreferencial.length>0)
            {
                clienteChamado=filaPreferencial.shift();
                senhaChamada.innerText=clienteChamado;
            }else
            {
                clienteChamado=filaComum.shift();
                senhaChamada.innerText=clienteChamado;
            }
        }
    }
//-----------------------------------FILA COMUM-------------------------------------
    if(event.target.innerText=="caixa 4")
    {
        
            caixaChamada.innerText="Caixa: 4";
            if(filaComum.length>0)
            {
                const clienteChamado=filaComum.shift();
                senhaChamada.innerText=clienteChamado;
            }
            else
            {
                if(filaPreferencial.length>0)
                {
                    clienteChamado=filaPreferencial.shift();
                    senhaChamada.innerText=clienteChamado;
                }
                else
                {
                    clienteChamado=filaRapida.shift()
                    senhaChamada.innerText=clienteChamado;
                }
            }
        
    } 
        console.log(filaComum)
        console.log(filaRapida)
        console.log(filaPreferencial)
} 
}//final fila



//-----------------------------------CHAMADAS DE FUNCAO------------------------------------

//----------------------------------------CLIENTES-----------------------------------------

botaoComum.addEventListener("click", function(event){
    adicionarFila(event)
});

botaoRapido.addEventListener("click", function(event){
adicionarFila(event);
});

botaoPreferencial.addEventListener("click", function(event){
adicionarFila(event);
});

//--------------------------------------CAIXAS(GUICHES)-----------------------------------

botaoCaixa1.addEventListener("click", function(event){
sairFila(event);
});

botaoCaixa2.addEventListener("click", function(event){
sairFila(event);
});

botaoCaixa3.addEventListener("click", function(event){
sairFila(event);
});
botaoCaixa4.addEventListener("click", function(event){
sairFila(event);
});

