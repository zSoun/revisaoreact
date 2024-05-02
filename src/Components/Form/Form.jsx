import "./Form.css"
import Input from "../Input/Input"

export default function Form() {

    return (
        <>
            <section>
                <div>
                    <h2>Finalizar Compra</h2>
                    <div>
                        <Input
                            title="Nome Completo *"
                            placeholder="Insira seu nome"
                        />
                        <Input
                            title="CPF *"
                            placeholder="Insira seu CPF"
                        />
                        <Input
                            title="E-mail * *"
                            placeholder="Insira seu email"
                        />
                        <Input
                            title="Celular *"
                            placeholder="Insira seu celular"
                        />
                        <Input
                            title="Nome Completo *"
                            placeholder="Insira seu Nome"
                        />
                    </div>
                    <div>
                        <h2>Informações de Entrega</h2>
                        <div>
                            <Input
                                title="Endereço *"
                                placeholder="Insira seu endereço"
                            />
                            <Input
                                title="Bairro *"
                                placeholder="Insira seu bairro"
                            />
                            <Input
                                title="Cidade *"
                                placeholder="Insira sua cidade"
                            />
                            <Input
                                title="CEP *"
                                placeholder="Insira seu cep"
                            />
                            <Input
                                title="Complemento *"
                                placeholder="Insira complemento"
                            />
                        </div>
                    </div>
                    <div>
                        <h2>Informações de Pagamento</h2>
                        <div>
                            <div>
                                <p>Forma de Pagamento</p>
                                <div>
                                <input type="radio" name="formaPagamento" id="" />
                                <label htmlFor="formaPagamento">Cartão de Crédito</label>

                                <input type="radio" name="formaPagamento" id="" />
                                <label htmlFor="formaPagamento"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}