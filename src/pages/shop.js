import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {  Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { fetchBrands, fetchProducts, fetchTypes } from '../http/productAPI';
import { CHINCHILLA_ROUTE, RATS_ROUTE, RABBIT_ROUTE, HAMSTER_ROUTE, MOUSE_ROUTE, DEGU_ROUTE, GUINEA_PIG_ROUTE } from '../utils/consts';


const Shop = (() => {
  const { product } = useContext(Context)
  
    useEffect(() => {
      fetchTypes().then(data => product.setTypes(data))
      fetchBrands().then(data => product.setBrand(data))
      fetchProducts(null, null, 1, 2).then(data => {
        product.setProducts(data.rows)
        
      })
    }, [])
  
    useEffect(() => {
      fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 2).then(data => {
          product.setProducts(data.rows)
          
      })
  }, [product.page, product.selectedType, product.selectedBrand,])

    return (
        
        <Container className='mt-4'>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://сельхозпортал.рф/wp-content/uploads/2016/11/shinshilla-e1479922362624.jpg" class="card-img-top" alt="шиншила"/>
      <div class="card-body">
  <h5><NavLink style={{color: 'darkcyan'}} to={CHINCHILLA_ROUTE } class="card-title">Шиншилы</NavLink></h5>
                <p class="card-text">Шиншиллы – умные животные, хорошо адаптируются в домашних условиях.
                  Очень любознательны, проявляют интерес к окружающему миру и не оставляют без внимания любые изменения в клетке или в комнате.
                  Если в доме появляются гости, реагируют очень бурно, стараясь привлечь внимание к своей персоне.
                  А еще они издают интересные звуки, по которым можно понять, что чувствует животное.
                  Например, если шиншилла чем-то недовольна, она издает трещащий звук.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Fancy_rat_blaze.jpg/1200px-Fancy_rat_blaze.jpg" class="card-img-top" alt="крыса"/>
      <div class="card-body">
     <h5> <NavLink style={{color: 'darkcyan'}} to={RATS_ROUTE } class="card-title">Крысы</NavLink></h5> 
                <p class="card-text">Декоративная домашняя крыса быстро привязывается к человеку и отлично дрессируется.
                  У них наблюдается отличная память, поэтому вашему питомцу будет достаточно увидеть вас один раз,
                  что бы запомнить ваш образ, запах и голос.
                  Так же они являются достаточно социальными животными, и непременно будут наблюдать за вашими действиями,
                  скучать пока вас нет рядом и всячески проявлять к вам интерес. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://hvost.news/upload/resize_cache/iblock/ba5/750_400_1/korotkosherstnyj_karlikovyj_krolik.jpg" class="card-img-top" alt="кролик"/>
      <div class="card-body">
     <h5> <NavLink style={{color: 'darkcyan'}} to={RABBIT_ROUTE } class="card-title">Кролики</NavLink></h5>
                <p class="card-text">Декоративные кролики — питомцы, которые,
                  помимо очаровательной внешности и живого характера, имеют много достоинств.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://hvost.news/upload/resize_cache/iblock/d87/750_400_1/sirijskij_homjak.jpg" class="card-img-top" alt="хомяк"/>
      <div class="card-body">
      <h5> <NavLink style={{color: 'darkcyan'}} to={HAMSTER_ROUTE } class="card-title">Хомяки</NavLink></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
          </div>
          <div class="col">
    <div class="card">
      <img src="https://dinozoopasaule.lv/ru/getimage/uploads/questionanswer/jlyoTaq4FnFTX_bIdQtCBeBtIWtu2Hn_.png?w=600&h=400&fit=crop" class="card-img-top" alt="мышь"/>
      <div class="card-body">
      <h5> <NavLink style={{color: 'darkcyan'}} to={MOUSE_ROUTE } class="card-title">Мыши</NavLink></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
          </div>
          <div class="col">
    <div class="card">
      <img src="https://vesti-lipetsk.ru/images/cms/thumbs/b4db7f3de3f8d30964ba8572e5418baf1e172f10/94b8dd9e32baf631fa4d4001ca7d2752_600_400_jpg_5_100.jpg" class="card-img-top" alt="дегу"/>
      <div class="card-body">
      <h5> <NavLink style={{color: 'darkcyan'}} to={DEGU_ROUTE } class="card-title">Дегу</NavLink></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
          </div>
          <div class="col">
    <div class="card">
      <img src="https://zoopt.ru/upload/iblock/6e6/71c5a714_6d00_11eb_8112_a0d3c1f100d5_1.jpg" class="card-img-top" alt="морская свинка"/>
      <div class="card-body">
      <h5> <NavLink style={{color: 'darkcyan'}} to={GUINEA_PIG_ROUTE } class="card-title">Морская свинка</NavLink></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
          </div>
          <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Название карточки</h5>
                <p class="card-text">Грызуны обычно используются в тестировании на животных,
                  особенно на мышах и крысы,
                  а также морские свинки, хомяки, песчанки и другие.
                  Мыши являются наиболее часто используемыми видами позвоночных из-за их доступности,
                  размера, низкой стоимости, простоты обращения и высокой скорости воспроизводства.</p>
      </div>
    </div>
          </div>
         
</div>
           
    </Container>
    );
});

export default Shop;