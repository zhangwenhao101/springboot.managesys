package com.zwh;

import com.zwh.sys.entity.User;
import com.zwh.sys.mapper.UserMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class SysManageApplicationTests {
    @Autowired
    private UserMapper userMapper;

    @Test
    void contextLoads() {
    }

    @Test
    public void testMapper() {
        List<User> users = userMapper.selectList(null);
        users.forEach(System.out::println);
    }



}
