import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';
import { Publication } from 'components/Publication';
import { Loader } from 'components/Loader';
import {
  getPublicationById,
  deletePublication,
} from 'services/publicationsApi';

export const ItemPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteItem = async () => {
    try {
      setIsDeleting(true);
      await deletePublication(itemId);
      toast.success('Публикация успешно удалена!');
      navigate('/list');
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await getPublicationById(itemId);
        setItem(item);
      } catch (error) {
        toast.error('Публикация не найдена!');
      }
    }
    fetchItem();
  }, [itemId]);

  return (
    <main>
      <Link to="/list">
        <FaArrowLeft /> К публикациям
      </Link>
      {item && (
        <>
          <hr />
          <button
            type="button"
            onClick={deleteItem}
            disabled={isDeleting}
            style={{ display: 'flex' }}
          >
            Удалить {isDeleting && <Loader size="sm" />}
          </button>
          <hr />
          <Publication item={item} />
        </>
      )}
    </main>
  );
};
