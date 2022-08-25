import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../routes";

export const Navbar: FC = () => {
  const router = useNavigate()

  const auth = true

  return (
    <Layout.Header>
      <Row style={{ flexDirection: 'row-reverse' }} >
        {auth
          ?
          <>
            <Menu
              onClick={() => console.log('Exit')}
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
              Max
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