import  { useState, useEffect } from 'react';
import { Button, Input, message } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, QrcodeOutlined } from '@ant-design/icons';
import * as S from './Styles';
import ItemModal from './AddItemModal';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
}

interface Menu {
  id: string;
  name: string;
  items: MenuItem[];
}

const MenuPage = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [newMenuName, setNewMenuName] = useState<string>('');
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [qrCodeVisible, setQrCodeVisible] = useState<boolean>(false);
  const [currentQRCode, setCurrentQRCode] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedMenus = JSON.parse(localStorage.getItem('menus') || '[]') as Menu[];
    setMenus(storedMenus);
  }, []);

  const saveMenus = (updatedMenus: Menu[]): void => {
    localStorage.setItem('menus', JSON.stringify(updatedMenus));
    setMenus(updatedMenus);
  };

  const handleAddMenu = (): void => {
    if (!newMenuName.trim()) {
      message.error('O nome do cardápio não pode estar vazio.');
      return;
    }
    const newMenu: Menu = {
      id: Date.now().toString(),
      name: newMenuName,
      items: [],
    };
    const updatedMenus = [...menus, newMenu];
    saveMenus(updatedMenus);
    setNewMenuName('');
  };

  const handleDeleteMenu = (menuId: string): void => {
    const updatedMenus = menus.filter((menu) => menu.id !== menuId);
    saveMenus(updatedMenus);
  };

  const handleAddItemToMenu = (menuId: string): void => {
    const menu = menus.find((menu) => menu.id === menuId) || null;
    setSelectedMenu(menu);
    setModalVisible(true);
  };

  const handleSaveItem = (item: MenuItem): void => {
    if (!selectedMenu) return;

    const updatedMenus = menus.map((menu) =>
      menu.id === selectedMenu.id ? { ...menu, items: [...menu.items, item] } : menu
    );

    saveMenus(updatedMenus);
    setModalVisible(false);
    setSelectedMenu(null);
  };

  const handlePreviewMenu = (menuId: string): void => {
    navigate(`/preview/${menuId}`);
  };

  const handleGenerateQRCode = (menuId: string): void => {
    const menuUrl = `${window.location.origin}/preview/${menuId}`; // Cria o link para o menu
    setCurrentQRCode(menuUrl);
    setQrCodeVisible(true);
  };

  return (
    <S.Container>
      <S.Title>Categorias do Cardápio</S.Title>
      <S.InputWrapper>
        <Input
          placeholder="Ex.: Bebidas, Massas"
          value={newMenuName}
          onChange={(e) => setNewMenuName(e.target.value)}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddMenu}>
          Adicionar
        </Button>
      </S.InputWrapper>
      {menus.map((menu) => (
        <S.MenuCard key={menu.id}>
          <S.MenuInfo>
            <strong>{menu.name}</strong>
            <p>{menu.items.length} itens</p>
          </S.MenuInfo>
          <S.Actions>
            <Button icon={<EyeOutlined />} onClick={() => handlePreviewMenu(menu.id)} />
            <Button icon={<QrcodeOutlined />} onClick={() => handleGenerateQRCode(menu.id)} />
            <Button icon={<DeleteOutlined />} danger onClick={() => handleDeleteMenu(menu.id)} />
            <Button icon={<PlusOutlined />} type="primary" onClick={() => handleAddItemToMenu(menu.id)}>
              Add Item
            </Button>
          </S.Actions>
        </S.MenuCard>
      ))}
      {modalVisible && (
        <ItemModal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onSave={handleSaveItem}
        />
      )}
      {qrCodeVisible && (
        <S.QRCodeModal
          title="QR Code do Cardápio"
          open={qrCodeVisible}
          onCancel={() => setQrCodeVisible(false)}
          footer={null}
        >
          <QRCode value={currentQRCode} size={256} />
        </S.QRCodeModal>
      )}
    </S.Container>
  );
};

export default MenuPage;
