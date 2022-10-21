import { forwardRef } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
const images = require('./no-img.jpg');
const Image = forwardRef(({ src, alt, className, fallBack: userFallBack = images, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(userFallBack);
    };
    return (
        <img
            src={fallBack || src}
            {...props}
            ref={ref}
            alt={alt}
            onError={handleError}
            className={classNames(styles.wrapper, className)}
        />
    );
});
export default Image;
