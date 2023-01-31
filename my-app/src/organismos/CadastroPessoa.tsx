import { useFormik } from "formik"
import axios from "axios"



    const CadastroPessoa = () => {

        const formik = useFormik({
            initialValues: {
                nome: '',
                cpf: '',
                email: '',
                telefone: '',
            },
            onSubmit: (values) => {
                console.log("values", values)

                axios.post("https://apigenerator.dronahq.com/api/ikqMcFAm/biblioteca", values)
            },
            validate: (values) => {
                const erros: {nome?: string, cpf?: string, email?: string, telefone?: string} = {}

                const regex = /^[A-Za-z]+((\s)?([A-Za-z])+)*$/

                if(!values.nome){
                    erros.nome = "Campo vazio!"
                }else if(!regex.test(values.nome)){
                    erros.nome = "Nome pode conter caracteres especiais!"
                }

                if(!values.email){
                    erros.email = "Campo vazio!"
                }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    erros.email = 'E-mail inválido';
                }

                if(!values.cpf){
                    erros.cpf = "Campo vazio!"
                }else if(values.cpf.length < 11 || values.cpf.length > 11){
                    erros.cpf = "Número de caracteres inválido!"
                }

                if(!values.telefone){
                    erros.telefone = "Campo vazio!"
                }else if(values.telefone.length < 11 || values.telefone.length > 11){
                    erros.telefone = "Número de caracteres inválido!"
                }

                return erros
            }
           

        })
    

    return (
        <>
            <section>
                <form onSubmit={formik.handleSubmit}>
                    <h1>Cadastre seus dados pessoais</h1>
                    <label>Nome:</label>
                    <input type="text" placeholder="Nome completo" name="nome" onChange={formik.handleChange} value={formik.values.nome}/>
                    {formik.errors.nome}
                    <label>CPF:</label>
                    <input type="text" placeholder="Somente números" name="cpf" onChange={formik.handleChange} value={formik.values.cpf}/>
                    {formik.errors.cpf}
                    <label>E-Mail:</label>
                    <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                    {formik.errors.email}
                    <label>Telefone:</label>
                    <input type="text" placeholder="Insira o telefone com DDD" name="telefone" onChange={formik.handleChange} value={formik.values.telefone}/>
                    {formik.errors.telefone}
                    <button type="submit" >Enviar</button>
                </form>
            </section>

            <div>
                <a href="/CadastroLivro">Cadastre o livro</a>
            </div>
        </>
    )

}

export default CadastroPessoa