import { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import * as S from './Styles';
import HeaderInfo from '../../../Components/CompanyHeader';
import ItemCard from './ItemCard';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  image: string;
}

interface Menu {
  id: string;
  name: string;
  items: MenuItem[];
}

const PreviewMenuPage = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);

  useEffect(() => {
    const storedMenus = JSON.parse(localStorage.getItem('menus') || '[]') as Menu[];
    setMenus(storedMenus);
    setSelectedMenu(storedMenus[0] || null); // Seleciona o primeiro menu por padrão
  }, []);

  const handleEditItem = (itemId: string) => {
    console.log(`Editando item com ID: ${itemId}`);
  };

  const handleDeleteItem = (itemId: string) => {
    if (!selectedMenu) return;

    const updatedItems = selectedMenu.items.filter((item) => item.id !== itemId);
    const updatedMenu = { ...selectedMenu, items: updatedItems };

    setSelectedMenu(updatedMenu);

    // Atualizar o localStorage
    const updatedMenus = menus.map((m) => (m.id === selectedMenu.id ? updatedMenu : m));
    setMenus(updatedMenus);
    localStorage.setItem('menus', JSON.stringify(updatedMenus));
  };

  const handleMenuChange = (menuId: string) => {
    const menu = menus.find((m) => m.id === menuId) || null;
    setSelectedMenu(menu);
  };

  return (
    <S.PreviewContainer>
      {menus.length > 0 ? (
        <>
          <S.Header>
            <HeaderInfo
              establishmentName="Cafe Do Posto"
              description="Cafe da manha nordestino autentico nos bancarios proximo as 3 ruas."
              address="Rua Euclides Ferreira de Carvalho, 77, Jardim Cidade Universitária - João Pessoa"
            />
          </S.Header>

          <Tabs
            defaultActiveKey={menus[0]?.id}
            onChange={handleMenuChange}
            centered
             type="card"
          >
            {menus.map((menu) => (
              <Tabs.TabPane tab={menu.name} key={menu.id }>
                <S.ItemList>
                  {menu.items.map((item) => (
                    <ItemCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      image={item.image}
                      onEdit={handleEditItem}
                      onDelete={handleDeleteItem}
                    />
                  ))}
                </S.ItemList>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </>
      ) : (
        <p>Não há cardápios cadastrados.</p>
      )}
    </S.PreviewContainer>
  );
};

export default PreviewMenuPage;
