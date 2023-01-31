import axios from "axios"
import { useFormik } from "formik"

const CadastroLivro = () => {

    const formik = useFormik({
        initialValues: {
            titulo: '',
            autor: '',
            editora: '',
            anoPublicacao: '',
            emprestimo: '',
        },
        onSubmit: (values) => {
            console.log("values", values)

            axios.post("https://apigenerator.dronahq.com/api/qvz5JQqi/emprestimo", values)
        },
        validate: (values) => {
            const erros: {titulo?: string, autor?: string, editora?: string, anoPublicacao?: string, emprestimo?: string} = {}
            
            if(!values.titulo){
                erros.titulo = "Campo vazio!"
            }
            

            if(!values.autor){
                erros.autor = "Campo vazio!"
            }
            

            if(!values.editora){
                erros.editora = "Campo vazio!"
            }

            if(!values.anoPublicacao){
                erros.anoPublicacao = "Campo vazio!"
            }

            if(!values.emprestimo){
                erros.emprestimo = "Campo vazio!"
            }

            return erros
        }
       

    })

    return (
        <>
            <section>
                <form onSubmit={formik.handleSubmit}>
                    <h1>Cadastre o livro</h1>
                    <label>Título:</label>
                    <input type="text" name="titulo" onChange={formik.handleChange} value={formik.values.titulo}/>
                    {formik.errors.titulo}
                    <label>Autor:</label>
                    <input type="text" name="autor"  onChange={formik.handleChange} value={formik.values.autor}/>
                    {formik.errors.autor}
                    <label>Editora:</label>
                    <input type="text" name="editora" onChange={formik.handleChange} value={formik.values.editora}/>
                    {formik.errors.editora}
                    <label>Ano de Publicação:</label>
                    <input type="text" name="anoPublicacao" onChange={formik.handleChange} value={formik.values.anoPublicacao}/>
                    {formik.errors.anoPublicacao}
                    <label>Data e Hora do empréstimo:</label>
                    <input type="text" name="emprestimo" onChange={formik.handleChange} value={formik.values.emprestimo}/>
                    {formik.errors.emprestimo}
                    <button type="submit" >Enviar</button>
                </form>
            </section>

            <a href="/CadastroPessoa">Volte a tela inicial</a>
        </>
    )

}

export default CadastroLivro