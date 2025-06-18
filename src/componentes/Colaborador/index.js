import './colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar (){
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    return (    <div className="colaborador">
            <a href="#" className="deletar" onClick={(e) => {
                e.preventDefault();
                aoDeletar(colaborador.id);
            }}>
                <AiFillCloseCircle size={25} color="black" />
            </a>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ? <AiFillHeart {...propsfavorito} color='#9C60FB'/> : <AiOutlineHeart {...propsfavorito} />}

            </div>
        </div>
    </div>)
}

export default Colaborador