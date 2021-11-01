
import React, { useEffect, useState } from "react"
import { formatarDinheiro } from "../utils/functions"

const ItemCarrinho = (props) => {

  const [item_carrinho, setItemCarrinho] = useState(null)
  const [imagem_principal, setImagemPrincipal] = useState(null)

  const itemCarrinho = () => {
    return JSON.parse(item_carrinho)
  }

  useEffect(() => {
    setItemCarrinho(props.item_carrinho)
    let imagem_principal = JSON.parse(props.item_carrinho).imagens.filter(i => i.principal)
    setImagemPrincipal(imagem_principal.length > 0 ? imagem_principal : [])
  }, [props.item_carrinho])

  const carregarAdicionais = (adicional, i) => {
    return <div className="item-carrinho-adicionados" key={i}>
      {adicional.adicional} ... <strong>{formatarDinheiro(adicional.valor)}</strong>
    </div>
  }

  const carregarAcompanhamentos = (acompanhamento, i) => {
    return <div className="item-carrinho-adicionados" key={i}>
      {acompanhamento.acompanhamento} ... <strong>{formatarDinheiro(acompanhamento.valor)}</strong>
    </div>
  }

  return (
    <>
      {item_carrinho && 
      <div className="item-carrinho">
        <div className="item-carrinho-informacoes">
          {imagem_principal.length > 0 && <img className="item-carrinho-imagem" src={`${process.env.REACT_APP_BASE_URL}/${imagem_principal[0].imagem}`} alt={imagem_principal[0].nome_imagem}/>}
          <div className="info-item-carrinho">
            <div className="item-carrinho-title"><strong>{itemCarrinho().item}</strong></div>
            <div className="item-carrinho-valor"><strong>{formatarDinheiro(itemCarrinho().valor_total)}</strong></div>
            <div className="item-carrinho-adicionados">
              {itemCarrinho().adicionais.length > 0 && itemCarrinho().adicionais.map(carregarAdicionais)}
              {itemCarrinho().acompanhamentos.length > 0 && itemCarrinho().acompanhamentos.map(carregarAcompanhamentos)}
            </div>
          </div>
          <div className="item-carrinho-remover">
            <div><strong>Excluir</strong></div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default ItemCarrinho
