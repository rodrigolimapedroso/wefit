
//eslint-disable-next-line
import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
    ContainerBody,
    Container,
    ListNotData,
    ListData,
    ListDataDesc,
    ListDataFunc,
    ContainerBox,
    ContainerBox1,
    ContainerBox1Input,
    ContainerBox1Button,
    ContainerBox2,
    ListNotDataContent
} from './styles';
import IcAdd from '../../assets/icons/ic-add.png';
import IcDelete from '../../assets/icons/ic-delete.png';

export default function Home() {
    
    const [name, setName] = useState("");
    const [listData, setListData] = useState([]);
    
    const functionChangeText = (event) => {
        setName(event.target.value);
    }

    const functionSave = () => {
        if(name.length > 0)
        {
            var count = Math.max(...listData.map(o => o.id), 0);
            setListData(listData => [...listData, { id: count + 1, name: name}]);
            setName("");
        }
    };

    const functionDelete = (id) => {
        const listDelete = listData.filter((item) => item.id !== id);
        setListData(listDelete);
    };
    
    return (
        <ContainerBody>
            <Container>
                <ContainerBox>
                    <ContainerBox1>
                        <ContainerBox1Input>
                            <Input
                                name="name"
                                placeholder="Digite"
                                value={name}
                                handleChange={functionChangeText}
                            />
                        </ContainerBox1Input>
                        <ContainerBox1Button>
                            <Button onClick={functionSave} icon={<img src={IcAdd} style={{ width: '24px', height: '24px' }} />}></Button>
                        </ContainerBox1Button>
                    </ContainerBox1>
                </ContainerBox>

                <ContainerBox2>
                    {
                        listData.length > 0 ?
                            listData.map((item, index) => (   
                                <ListData key={item.id}>
                                    <ListDataDesc>{ item.name }</ListDataDesc>
                                    <ListDataFunc onClick={(e) => functionDelete(item.id)}>
                                        <img src={IcDelete} style={{ width: '12.44px', height: '16px' }} />
                                    </ListDataFunc>
                                </ListData>
                            ))
                        :
                        <ListNotData>
                            <ListNotDataContent>
                                Nenhum item cadastrado 
                            </ListNotDataContent>
                        </ListNotData>
                    }
                </ContainerBox2>
            </Container>
        </ContainerBody>
    )
}