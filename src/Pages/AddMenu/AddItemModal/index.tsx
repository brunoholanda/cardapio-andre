import { useState } from 'react';
import { Modal, Input, Button, message, Upload } from 'antd';
import { UploadOutlined, CameraOutlined } from '@ant-design/icons';
import * as S from './Styles';
import CameraCaptureModal from '../CameraCaptureModal/index.tsx';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  image?: File;
}

const ItemModal = ({
  visible,
  onCancel,
  onSave,
}: {
  visible: boolean;
  onCancel: () => void;
  onSave: (item: MenuItem) => void;
}) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);

  const handleSave = () => {
    if (!itemName.trim() || !itemPrice.trim()) {
      message.error('Preencha todos os campos obrigatórios.');
      return;
    }
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: itemName,
      price: itemPrice,
      description: itemDescription,
      image: imageFile || undefined,
    };
    onSave(newItem);
    setItemName('');
    setItemPrice('');
    setItemDescription('');
    setImageFile(null);
  };

  const handleFileChange = (file: File) => {
    setImageFile(file);
  };

  return (
    <>
      <Modal
        title="Adicionar Item"
        visible={visible}
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Cancelar
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Salvar
          </Button>,
        ]}
      >
        <S.ModalContent>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
              />
            ) : (
              <div style={{ padding: '10px', border: '1px dashed #ccc', borderRadius: '4px' }}>
                Nenhuma imagem selecionada
              </div>
            )}
            <div style={{ marginTop: '10px' }}>
              <Upload
                beforeUpload={(file) => {
                  handleFileChange(file);
                  return false; // Impede o upload automático
                }}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Selecionar Imagem</Button>
              </Upload>
              <Button
                icon={<CameraOutlined />}
                style={{ marginLeft: '10px' }}
                onClick={() => setIsCameraModalOpen(true)}
              >
                Tirar Foto
              </Button>
            </div>
          </div>
          <Input
            placeholder="Nome do item (ex.: X-Super)"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Valor (ex.: 19,99)"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
          <Input.TextArea
            placeholder="Descrição (ex.: O maior X-Salada da face da terra!)"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            rows={4}
          />
        </S.ModalContent>
      </Modal>
      <CameraCaptureModal
        isOpenCameraModal={isCameraModalOpen}
        onClose={() => setIsCameraModalOpen(false)}
        onCapture={(file) => {
          handleFileChange(file);
          setIsCameraModalOpen(false);
        }}
      />
    </>
  );
};

export default ItemModal;
