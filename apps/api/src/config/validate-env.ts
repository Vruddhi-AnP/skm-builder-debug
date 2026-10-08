const VALID_NODE_ENVS = new Set(['development', 'test', 'production']);

export function validateEnv(
  config: Record<string, unknown>,
): Record<string, unknown> {
  const requiredEnvVars = [
    'DATABASE_URL',
    'JWT_SECRET',
    'NODE_ENV',
    'FRONTEND_URL',
  ] as const;

  for (const envVar of requiredEnvVars) {
    const value = config[envVar];

    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  }

  const nodeEnv = (config.NODE_ENV as string).trim();

  if (!VALID_NODE_ENVS.has(nodeEnv)) {
    throw new Error('NODE_ENV must be one of: development, test, production');
  }

  const jwtSecret = (config.JWT_SECRET as string).trim();

  if (nodeEnv === 'production' && jwtSecret.length < 32) {
    throw new Error('JWT_SECRET must be at least 32 characters in production');
  }

  const frontendUrl = (config.FRONTEND_URL as string).trim();

  try {
    const parsedUrl = new URL(frontendUrl);

    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      throw new Error('Unsupported protocol');
    }
  } catch {
    throw new Error('FRONTEND_URL must be a valid HTTP or HTTPS URL');
  }

  return {
    ...config,
    DATABASE_URL: (config.DATABASE_URL as string).trim(),
    JWT_SECRET: jwtSecret,
    NODE_ENV: nodeEnv,
    FRONTEND_URL: frontendUrl,
  };
}
