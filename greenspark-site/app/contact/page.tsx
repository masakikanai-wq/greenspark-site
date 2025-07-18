'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  company: z.string().min(1, '会社名を入力してください'),
  phone: z.string().min(1, '電話番号を入力してください'),
  message: z.string().min(1, 'メッセージを入力してください'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-greenspark-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              お問い合わせありがとうございます
            </h2>
            <p className="text-gray-600 mb-6">
              お送りいただいたメッセージは正常に受信いたしました。
              2営業日以内にご返信いたします。
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-greenspark-green hover:underline"
            >
              ← 戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600">
              省エネ・環境コンサルティングに関するご相談はこちら
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                お問い合わせフォーム
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-greenspark-green focus:border-transparent"
                    placeholder="山田 太郎"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-greenspark-green focus:border-transparent"
                    placeholder="yamada@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名 *
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-greenspark-green focus:border-transparent"
                    placeholder="株式会社サンプル"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-greenspark-green focus:border-transparent"
                    placeholder="03-1234-5678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-greenspark-green focus:border-transparent"
                    placeholder="ご相談内容をお聞かせください"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-greenspark-green text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                お問い合わせ先
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    GreenSpark Solutions Inc.
                  </h3>
                  <p className="text-gray-600">
                    〒100-0001<br />
                    東京都千代田区千代田1-1-1<br />
                    グリーンスパークビル 5F
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">電話</h4>
                  <p className="text-gray-600">03-1234-5678</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">メール</h4>
                  <p className="text-gray-600">info@greenspark-solutions.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">営業時間</h4>
                  <p className="text-gray-600">
                    平日 9:00 - 18:00<br />
                    土日祝日休み
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-greenspark-green bg-opacity-10 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  お急ぎの場合
                </h4>
                <p className="text-sm text-gray-600">
                  緊急のご相談は電話にてお願いいたします。
                  専門スタッフが迅速に対応いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}