import styles from "./styles.module.css";

const Pagination = ({ page, total, limit, setPage }) => {
    const totalPages = Math.ceil(total / limit);

    return (
        <div className={styles.container}></div>
    );
};

export default Pagination;
