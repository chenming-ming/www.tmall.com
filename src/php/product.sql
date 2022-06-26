-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2022-06-22 20:45:12
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `chenmm`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `picture` text NOT NULL,
  `num` int(11) NOT NULL,
  `details` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `picture`, `num`, `details`) VALUES
(100001, '比比赞雪花梅干果干果脯蜜饯袋装小零食休闲食品小包装办公室美食', '￥9.9', '[{\"src\": \"img/210002019.jpg\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/210002019.jpg\">'),
(100002, '比比赞蛋黄酥雪媚娘12枚600g营养早餐代餐休闲零食品网红小吃糕点', '￥29.9', '[{\"src\": \"img/smt2.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt2.webp\">'),
(100003, '威驱蚊电蚊香液无香无味5瓶1器285晚家庭家用灭蚊插电蚊香', '￥39.9', '[{\"src\": \"img/smt3.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt3.webp\">'),
(100004, '高洁丝夜用放肆睡420mm×9片丝薄棉柔超长款防侧漏卫生巾姨妈巾', '￥27.9', '[{\"src\": \"img/smt4.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt4.webp\">'),
(100005, '心相印4层卷纸心柔系列180克27卷家用纸巾卫生纸厕纸畅销爆款箱装', '￥69.9', '[{\"src\": \"img/smt5.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt5.webp\">'),
(100006, '好奇铂金装婴儿纸尿裤NB84超薄裸感透气新生儿宝宝儿童尿不湿尿片', '￥85', '[{\"src\": \"img/smt6.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt6.webp\">'),
(100007, 'RIO锐澳预调鸡尾酒微醺常规系列张子枫同款330ml*10果酒洋酒', '￥92.6', '[{\"src\": \"img/smt7.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt7.webp\">'),
(100008, '日本进口狮王网红white white美白牙膏大白防蛀清新去渍150g×1支', '￥31.8', '[{\"src\": \"img/smt8.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt8.webp\">'),
(100009, '蓝月亮亮白洗衣液机洗整箱批促销组合装6kg自然清香家用持久护理', '￥9.9', '[{\"src\": \"img/smt9.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt9.webp\">'),
(100010, '胡姬花古法花生油6.08L/桶 食用油 传统工艺 压榨 家用大桶装', '￥99.9', '[{\"src\": \"img/smt10.webp\",\"alt\": \"比比赞雪花梅\"}]', 100, '<img src=\"img/smt10.webp\">');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
