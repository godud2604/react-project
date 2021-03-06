import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// components
import { MainLayout } from '../../../components/layout/front';
import { SubNav } from '../../../components/layout/front/header';
import { OrderMenu, OrderStore } from '../../../components/detail';
// 개발자 라이브러리
import theme from '../../../styles/utils/theme';
// css
import { Container, OrderInner } from '../../../styles/order/order';
// images
import { ReactComponent as Search } from '../../../images/common/btn-search.svg';
import { ReactComponent as BottomArrow } from '../../../images/common/btn-arrow-bottom.svg';
import { ReactComponent as Bag } from '../../../images/common/icon-shopping-bag.svg';

const Order = () => {
  const history = useHistory();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const subNavInfo = [
    {
      "id": 1,
      "title": '전체 매장',
    },
    {
      "id": 2,
      "title": '자주 찾는 매장',
    },
  ];

  return (
    <MainLayout navBottom>
      <Container>
        <OrderInner>
          <div className='order-head'>
            <h1 className='order-title'>주문</h1>
            <div className='order-search' onClick={() => history.push('/search')}>
              <Search fill={`${theme.colors.gray3}`}/>
            </div>
          </div>

          <SubNav 
            nav={subNavInfo}
            toggleState={toggleState}
            toggleTab={toggleTab}
          />

          <div className={toggleState === 1 ? "content active-content" : "content"}>
            <nav className='order-nav'>
              <ul className='nav-list'>
                <li className='nav-item is-active'>음료 </li>
                <li className='nav-item'>푸드</li>
                <li className='nav-item'>식품</li>
              </ul>
            </nav>

            <div className='order-list'>
              <OrderMenu onClick={() => history.push('/detail')}/>
              <OrderMenu />
              <OrderMenu />
              <OrderMenu />
            </div>
          </div>

          <div className={toggleState === 2 ? "content active-content" : "content"}>
            <div className='store-list'>
              <OrderStore className='store-item'/>
              <OrderStore className='store-item'/>
              <OrderStore className='store-item'/>
            </div>
          </div>

          <div className='order-bottom-store-select' onClick={() => history.push('/store')}>
            <div className='select'>
              <span>주문할 매장을 선택하세요</span>
              <BottomArrow 
                fill='white'
              />
            </div>

            <div className='shopping-bag'>
              <Bag 
                fill='white'
              />
            </div>
          </div>

        </OrderInner>
      </Container>
    </MainLayout>
  );
};

export default Order;