import PropTypes from 'prop-types';
import { cn } from '../../lib/cn';
import { cva } from 'class-variance-authority';
import { TrashIcon } from '../../assets/icons/TrashIcon';
import imgPlaceholder from '../../assets/images/png/book-placeholder.png';

export const BookCard = ({
  id,
  title,
  author,
  imageUrl,
  size = 'large',
  variant,
  onDelete,
}) => {
  const imgVariat = cva('rounded-[8px] mb-[8px]', {
    variants: {
      size: {
        large: 'w-[137px] h-[208px]',
        small: 'w-[71px] h-[107px]',
      },
    },
    defaultVariants: {
      size: 'large',
    },
  });

  const titleVariat = cva(
    ' overflow-hidden text-ellipsis whitespace-nowrap font-[700] leading-[129%]',
    {
      variants: {
        size: {
          large: 'text-[14px]',
          small: 'text-[10px]',
        },
      },
      defaultVariants: {
        size: 'large',
      },
    }
  );

  const handleTrashClick = (e) => {
    e.stopPropagation();
    onDelete({ id });
  };
  // const authorVariat = cva(
  //   'mb-[2px] overflow-hidden text-ellipsis whitespace-nowrap font-[700] leading-[129%]',
  //   {
  //     variants: {
  //       size: {
  //         large: 'text-[10px] leading-[120%] text-gray-68',
  //         small: 'text-[10px]',
  //       },
  //     },
  //     defaultVariants: {
  //       size: 'large',
  //     },
  //   }
  // );

  return (
    <>
      <img
        className={cn(imgVariat({ size }))}
        src={imageUrl ? imageUrl : imgPlaceholder}
        alt={title}
      />
      <div
        className={`mb-[2px] ${variant === 'delete' && 'flex max-w-[137px] justify-between'} `}
      >
        <div className={`${variant === 'delete' && 'w-[90px]'}`}>
          <h3 className={cn(titleVariat({ size }))}>{title}</h3>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[10px] leading-[120%] text-gray-68">
            {author}
          </p>
        </div>
        {variant === 'delete' && (
          <div className="trashIcon" onClick={handleTrashClick}>
            <TrashIcon />
          </div>
        )}
      </div>
    </>
  );
};

BookCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  onDelete: PropTypes.func,
};
