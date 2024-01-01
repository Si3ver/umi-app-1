import React, { useState } from 'react'
import { Input, Button } from 'antd'

interface IVerifyCodeProps {
  /* 验证码 */
  value?: any
  /* 修改验证码 */
  onChange?: (value: any) => void
  /* 发送按钮是否 ready */
  readyPost?: boolean
  /* 发送手机号 */
  phoneNumber?: number
  style?: React.CSSProperties
}

export const VerifyCode: React.FC<React.PropsWithChildren<IVerifyCodeProps>> =
  ({ value, onChange, readyPost, phoneNumber, ...props }) => {
    // 倒计时功能
    const [lastTime, setLastTime] = useState(0)

    const counting = (time = 20) => {
      if (time < 0) return
      setLastTime(time)
      setTimeout(() => {
        counting(time - 1)
      }, 1000)
    }

    return (
      <div
        style={{ display: 'inline-flex', width: '100%', alignItems: 'center' }}
      >
        <Input
          {...props}
          style={{ marginRight: 5, ...props.style }}
          value={value}
          onChange={onChange}
        />
        <div
          style={{
            flexShrink: 0,
            color: '#999',
            width: 100,
            height: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {lastTime === 0 && (
            <Button
              disabled={!readyPost}
              block
              onClick={() => {
                if (phoneNumber) {
                  console.log(`post code by phone number ${phoneNumber}`)
                }
                counting()
              }}
            >
              发送验证码
            </Button>
          )}
          {lastTime > 0 && <span>剩余{lastTime}秒</span>}
        </div>
      </div>
    )
  }
