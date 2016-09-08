-- PELCOP��Э����Ҫ����У�閬��һ�������������λ�ֽ������

local Protocol = {};

-- ��ʾ��ֵ������16��10����(��Сֵ�����ֵ)
Protocol.Attr = 
{
		-- Э�����ʾ����,���ܳ���16�ַ�
		Name = "PELCOP",	
		
		-- ָ������̨Э�黹�Ǿ���Э��
		Type = "PTZ",
		
		-- ��msΪ��λ
		Internal = 200,
			
		-- ��̨��ַ��Χ
		CamAddrRange 		= {0x01, 0x1F}, 
		-- ���ӵ�ַ��Χ
		MonAddrRange		= {0x00, 0xFF},	
		-- Ԥ�õ㷶Χ
		PresetRange 		= {0x00, 0xFF},
		-- �Զ�Ѳ����·��Χ
		TourRange			= {0x01, 0x01},
		-- �켣��·��Χ
		PatternRange		= {0x01, 0x01},
		-- ��ֱ�ٶȷ�Χ
		TileSpeedRange 		= {0x01, 0x3F},
		-- ˮƽ�ٶȷ�Χ
		PanSpeedRange 		= {0x01, 0x3F},
		-- �Զ�ɨ�跶Χ
		ScanRange 			= {0x01, 0xff},
		
		-- ������Χ
		AuxRange 			= {0x01, 0x08},
}

Protocol.CommandAttr =
{
	-- Э������Ҫ���ĵ�λ�ã���LUA�±��ʾ�����±�ӣ���ʼ
	AddrPos = 2, 
	PresetPos = 6, 
	TileSpeedPos = 6,
	PanSpeedPos = 5,
	AuxPos = 6,
}


Protocol.Command = 
{
	-- д����Э��ʱֻ����16���ƻ��ַ���ʾ, û��
	Start= 
	{
		--д��������, ���ϣ����£����ϣ�����
		TileUp 		= "0xa0, 0x00, 0x00, 0x08, 0x00, 0x1F, 0xaf, 0x00,",
		TileDown 	= "0xa0, 0x00, 0x00, 0x10, 0x00, 0x1F, 0xaf, 0x00,",
		PanLeft 	= "0xa0, 0x00, 0x00, 0x04, 0x2f, 0x00, 0xaf, 0x00,", 
		PanRight 	= "0xa0, 0x00, 0x00, 0x02, 0x2f, 0x00, 0xaf, 0x00,",
		LeftUp 		= "0xa0, 0x00, 0x00, 0x0c, 0x2f, 0x00, 0xaf, 0x00,",
		LeftDown 	= "0xa0, 0x00, 0x00, 0x14, 0x2f, 0x00, 0xaf, 0x00,",
		RightUp		= "0xa0, 0x00, 0x00, 0x0a, 0x2f, 0x00, 0xaf, 0x00,",
		RightDown = "0xa0, 0x00, 0x00, 0x12, 0x2f, 0x00, 0xaf, 0x00,",
		
		ZoomWide 	= "0xa0, 0x00, 0x00, 0x40, 0x00, 0x00, 0xaf, 0x00",
		ZoomTele 	= "0xa0, 0x00, 0x00, 0x20, 0x00, 0x00, 0xaf, 0x00,",
		FocusNear 	= "0xa0, 0x00, 0x02, 0x00, 0x00, 0x00, 0xaf, 0x00,",
		FocusFar 	= "0xa0, 0x00, 0x01, 0x00, 0x00, 0x00, 0xaf, 0x00",
		IrisSmall	= "0xa0, 0x00, 0x08, 0x00, 0x00, 0x00, 0xaf, 0x00,",
		IrisLarge 	= "0xa0, 0x00, 0x04, 0x00, 0x00, 0x00, 0xaf, 0x00",
			
		-- �ƹ�
		LightOn			= "0xa0, 0x00, 0x50, 0x00, 0x00, 0x00, 0xaf,0x00",
		LightOff  	= "0xa0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaf,0x00",
			
		-- Ԥ�õ���������ã������ת��)
		SetPreset 	= "0xa0, 0x00, 0x00, 0x03, 0x00, 0x21, 0xaf, 0x00",
		ClearPreset	= "0xa0, 0x00, 0x00, 0x05, 0x00, 0x21, 0xaf, 0x00",
		GoToPreset 	= "0xa0, 0x00, 0x00, 0x07, 0x00, 0x21, 0xaf, 0x00",			
		
		-- �����ƶ�����
		AbsoluteStart = "0xa0, 0x01, 0x00, 0x4b, 0x00, 0x00, 0xaf, 0x00, 0xa0, 0x01, 0x00, 0x4d, 0x00, 0x00, 0xaf, 0x00, 0xa0, 0x01, 0x00, 0x4f, 0x00, 0x00, 0xaf, 0x00";
		AbsoluteStop = "0xa0, 0x01, 0x00, 0x00, 0x00, 0x00, 0xaf, 0x0e",
		
		--�����ƶ�����
		ContinueStart = "0xa0, 0x01, 0x00, 0x00, 0x00, 0x00, 0xaf, 0xff",
		ContinueStop = "0xa0, 0x01, 0x00, 0x00, 0x00, 0x00, 0xaf, 0x0e",
			
		-- ˮƽ��ת����Ԥ�����õı߽��м�ת��
		SetLeftLimit 	= "0xa0, 0x00, 0x00, 0x11, 0x00, 0x21, 0xaf, 0x00",
		SetRightLimit	= "0xa0, 0x00, 0x00, 0x13, 0x00, 0x21, 0xaf, 0x00", 
		AutoScanOn 		= "0xa0, 0x00, 0x00, 0x1B, 0x00, 0x21, 0xaf, 0x00",
		AutoScanOff		= "0xa0, 0x00, 0x00, 0x1D, 0x00, 0x21, 0xaf, 0x00",
		
		-- �켣Ѳ��, һ��ָģʽ(���ÿ�ʼ�����ý��������У�ֹͣ�����ģʽ
		SetPatternStart = "0xa0, 0x00, 0x00, 0x1f, 0x00, 0x21, 0xaf, 0x00",
		SetPatternStop 	= "0xa0, 0x00, 0x00, 0x21, 0x00, 0x21, 0xaf, 0x00",
		StartPattern 	= "0xa0, 0x00, 0x00, 0x23, 0x00, 0x21, 0xaf, 0x00",
		StopPattern     = "0xa0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaf, 0x00,",
		
		AuxOn 	= "0xa0, 0x00, 0x00, 0x09, 0x00, 0x21, 0xaf, 0x00,",
		AuxOff 	= "0xa0, 0x00, 0x00, 0x0b, 0x00, 0x21, 0xaf, 0x00,",
		
	},
	Stop = 
	{
		TileUp 		= "0xa0, 0x0, 0x00, 0x0, 0x0, 0x0, 0xaf,0x0,",
		TileDown 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0",
		PanLeft 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0",
		PanRight 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0",
		LeftUp 		= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
		LeftDown 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
		RightUp		= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
		RightDown 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
			
		ZoomWide 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
		ZoomTele 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
		FocusNear 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
		FocusFar 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
		IrisSmall 	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
		IrisLarge	= "0xa0,0x0,0x00,0x0,0x0, 0x0, 0xaf,0x0,",
	},
}

Protocol.Checksum = function (s)
	local value = s[1];
	for i = 2, 7 do
		value = bits.bxor(value,s[i]);
	end;
	s[8] = math.mod(value, 256);
	return s;
end;

--[[
��̨���Զ�λ
arg1:ˮƽ����
arg2����ֱ����
arg3��ZOOM����
--]]

Protocol.AbsoluteStartProcess = function(s,arg1, arg2, arg3, T)
	local xValue = bits.rshift(arg1, 16);
	--Onvif��ֱ�����и���
	local yValue = arg2/(256*256);
	local zValue = bits.rshift(arg3, 16);

	xValue = xValue*10;
	--��ֱ����ϵת��
	if yValue < 0 then
		yValue = yValue + 3600;
	end;
	yValue = yValue*10;
	zValue = (zValue/128)*65535;
	--����ֻ���������ƶ�����
	--PositionAbs = "0xa0, 0x01, 0x00, 0x4b, 0x00, 0x00, 0xaf, 0x00, 0xa0, 0x01, 0x00, 0x4d, 0x00, 0x00, 0xaf, 0x00, 0xa0, 0x01, 0x00, 0x4f, 0x00, 0x00, 0xaf, 0x00";
	if s[1] == 0xa0 then
		--ˮƽλ��
		s[5] = bits.rshift(bits.band(xValue,0xff00), 8);
		s[6] = bits.band(xValue,0xff);
		
		local value = s[1];
		for i = 2, 7 do
			value = bits.bxor(value,s[i]);
		end;
		s[8] = math.mod(value, 256);
		
		--��ֱλ��
		s[13] = bits.rshift(bits.band(yValue,0xff00), 8);
		s[14] = bits.band(yValue,0xff);
		
		value = s[9];
		for i = 10, 15 do
			value = bits.bxor(value,s[i]);
		end;
		s[16] = math.mod(value, 256);
		
		--�䱶ֵ
		s[21] = bits.rshift(bits.band(zValue,0xff00), 8);
		s[22] = bits.band(zValue,0xff);
		
		value = s[17];
		for i = 18, 23 do
			value = bits.bxor(value,s[i]);
		end;
		s[24] = math.mod(value, 256);
		
		return s;
	end;
end;

--[[
��̨�����ƶ�
arg1:ˮƽ�ٶ�
arg2����ֱ�ٶ�
arg3��ZOOM�ٶ�
T����ʱʱ��
--]]
Protocol.ContinueStartProcess = function(s, arg1, arg2, arg3, T)
	--����ֻ���������ƶ�����		
	if s[1] == 0xa0 then
		--����ˮƽ����
		if arg1 > 0 then
			s[4] = 0x02;
		elseif arg1 < 0 then
			s[4] = 0x04;
		else
			s[4] = 0x00;
		end
		--������ֱ����
		if arg2 > 0 then
			s[4] = bits.bor(s[4], 0x08);
		elseif arg2 < 0 then
			s[4] = bits.bor(s[4], 0x10);
		end
		--�����䱶����
		if arg3 > 0 then
			s[4] = bits.bor(s[4], 0x20);
		elseif arg3 < 0 then
			s[4] = bits.bor(s[4], 0x40);
		end
		--����ˮƽ�ٶȣ���Χ(0,3f),Onvif��Χ(0, ff)
		s[5] = math.abs(arg1)/4;
		--������ֱ�ٶȣ���Χ(0,3f),Onvif��Χ(0, ff)
		s[6] = math.abs(arg2)/4;
		
		local value = s[1];
		for i = 2, 7 do
			value = bits.bxor(value,s[i]);
		end;
		s[8] = math.mod(value, 256);
		
		return s;
	end
end;

--[[
--����ĺ����ǿ�ѡ�ģ����������⴦�����̲Ŵ򿪣�û�еĻ���ǧ��Ҫ�򿪣��������ɽ�������
Protocol.CamAddrProcess = function(s, addr)
	-- ����ĵ�ַ0����camaddr 1
	s[Protocol.CommandAttr.AddrPos] = addr;
	return s;
end;

Protocol.MonAddrProcess = function(s, addr)
	return s;
end;

Protocol.SpeedProcess = function(s, arg1, arg2)
	return s;
end;

Protocol.PresetProcess = function(s, arg1, arg2))
	return s;
end;
--]]

return Protocol;