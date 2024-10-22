1. 数据库配置请修改 DATABASE_URL
2. 命令行输入采用;作为分割符，实例如下：
```bash
insert single question;1 + 1 = ?;4;A.2;B.3;C.4;D.5;A
insert multiple question;1 + 1 > ?;4;A.0;B.1;C.2;D.3;2;AB
delete qustion;1
find question;2
answer questiion;2;AB
```
没有过滤空格等功能（）
