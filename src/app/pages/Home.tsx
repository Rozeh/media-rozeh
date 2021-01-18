import { gql, useQuery } from '@apollo/client';
import { loadavg } from 'os';
import React from 'react';
import Patient from '../../_Rozeh/components/Patient';
import Basic from '../../_Rozeh/layouts/Basic';
import { IPatient, IPatientsData } from '../interfaces';

const Get_Patient = gql`
    query {
        patients {
            id,
            name
        }
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery<IPatientsData>(Get_Patient);
    const patients = data?.patients.length !== 0 ? data?.patients : null;

    if (loading) return <div>로딩 중</div>;
    if (error) return <div> 에러 발생! </div>;

    return (
        <div>
            {patients?.map(( patient: IPatient ) => (
                <Patient key={patient.id} id={patient.id} name={patient.name} />
            )) ?? "환자가 없습니다."}
        </div>
    )
}

export default Home;