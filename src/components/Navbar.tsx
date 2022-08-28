import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes";

export const Navbar: FC = () => {
  const router = useNavigate()
  const { isAuth, user } = useTypedSelector(state => state.auth)
  const { logout } = useActions()

  return (
    <Layout.Header>
      <Row style={{ flexDirection: 'row-reverse' }} >
        {isAuth
          ?
          <>
            <Menu
              onClick={logout}
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={[
                {
                  key: 1,
                  label: `Exit`
                },
              ]}
            />
            <div style={{ color: 'white', marginRight: '20px' }}>
              {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
            </div>
          </>
          :
          <Menu
            onClick={() => router(RouteNames.LOGIN)}
            style={{ flex: 'auto', justifyContent: 'flex-end' }}
            theme="dark"
            mode="horizontal"
            selectable={false}
            items={[
              {
                key: 1,
                label: `Login`
              },
            ]}
          />
        }
      </Row>
    </Layout.Header>
  )
}