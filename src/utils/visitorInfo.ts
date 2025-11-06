import { Request } from 'express';

const getGeoFromIP = async (ip: string) => {
  if (!ip || ip.includes('127.0.0.1') || ip.includes('::1') || ip.includes('172.') || ip.includes('192.168.') || ip.includes('::ffff:')) {
    try {
      const response = await fetch('http://ip-api.com/json/');
      const data = await response.json();
      return {
        country: data.country || 'Unknown',
        city: data.city || 'Unknown',
        timezone: data.timezone || 'Unknown',
      };
    } catch {
      return { country: 'Local', city: 'Local', timezone: 'Local' };
    }
  }
  
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    return {
      country: data.country || 'Unknown',
      city: data.city || 'Unknown',
      timezone: data.timezone || 'Unknown',
    };
  } catch {
    return { country: 'Unknown', city: 'Unknown', timezone: 'Unknown' };
  }
};

export const getDetailedVisitorInfo = async (req: Request) => {
  const ip = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] as string;
  const userAgent = req.headers['user-agent'] || '';
  
  // Get geolocation from IP
  const geo = await getGeoFromIP(ip);
  
  // Extract device type from user agent
  const getDeviceType = (ua: string): string => {
    if (/mobile/i.test(ua)) return 'mobile';
    if (/tablet/i.test(ua)) return 'tablet';
    return 'desktop';
  };

  console.log('IP:', ip ,`\n`);
  console.log('Geolocation:', geo,`\n`);
  console.log('User Agent:', userAgent ,`\n`);
  console.log('Device Type:', getDeviceType(userAgent),`\n`);
  console.log('Visit Time:', new Date(),`\n`); 
  console.log('Referrer:', req.headers.referer,`\n`);
  console.log('Accept Language:', req.headers['accept-language'],`\n`);
  console.log('Pages Visited:', [req.originalUrl || req.url],`\n`);
  console.log('----------------------------------------');


  return {
    ip_address: ip,
    country: geo.country,
    city: geo.city,
    timezone: geo.timezone,
    user_agent: userAgent,
    referrer: req.headers.referer,
    accept_language: req.headers['accept-language'],
    device_type: getDeviceType(userAgent),
    visit_time: new Date(),
    pages_visited: [req.originalUrl || req.url],
  };
};